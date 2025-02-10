import './App.css'
import { useState } from 'react'

const App = () => {
  const initialState = [
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png'
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png'
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png'
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png'
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png'
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png'
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png'
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png'
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png'
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png'
    }
  ]

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(initialState)

  const handleAddFighter = (fighter) => {
    if (money <= fighter.price) {
      console.log('Not Enough Money')
      return
    }

    const newTeam = [...team, fighter]
    setTeam(newTeam)
    // setTeam([...team, fighter]);

    const newZombieFighters = zombieFighters.filter(
      (zombieFighter) => zombieFighter.id !== fighter.id
    )
    setZombieFighters(newZombieFighters)

    const newMoney = money - fighter.price
    setMoney(newMoney)
  }

  const handleRemoveFighter = (fighterId) => {
    const removedFighter = team.find((member) => member.id === fighterId)

    const newTeam = team.filter((member) => member.id !== fighterId)
    setTeam(newTeam)

    const newZombieFighters = [...zombieFighters, removedFighter]
    setZombieFighters(newZombieFighters)

    const newMoney = money + removedFighter.price
    setMoney(newMoney)
  }

  const zombieFighterMembers = () => {
    return (
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    )
  }

  const teamMembers = () => {
    if (team.length === 0) {
      return <p>Pick some team members!</p>
    } else {
      return (
        <ul>
          {team.map((member) => (
            <li key={member.id}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(member.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )
    }
  }

  const totalStrength = () => {
    // if (team.length === 0) {
    //   return 0;
    // } else {
    //   return team.reduce((total, fighter) => {
    //     return total + fighter.strength }, 0);
    // }
    let total = 0
    if (team.length === 0) {
      return total
    } else {
      team.forEach((fighter) => {
        total += fighter.strength
      })
      return total
    }
  }

  const totalAgility = () => {
    // if (team.length === 0) {
    //   return 0;
    // } else {
    //   return team.reduce((total, fighter) => {
    //     return total + fighter.agility }, 0);
    // }
    let total = 0
    if (team.length === 0) {
      return total
    } else {
      team.forEach((fighter) => {
        total += fighter.agility
      })
      return total
    }
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength()}</h3>
      <h3>Team Agility: {totalAgility()}</h3>
      <h3>Team: </h3>
      {teamMembers()}
      <h1>Fighters: </h1>
      {zombieFighterMembers()}
    </>
  )
}

export default App
