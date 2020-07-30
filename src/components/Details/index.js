import React from 'react'
import './styles.scss'
import Title from '../Title'

function Details({ pokedex }) {
  const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

  return (
    <div>
      <Title pokedex={pokedex} />
      <div className='details'>
        <div className='flex-container'>
          <div className='pokedex-left'>
            <figure>
              <img src={`${imageURL}${pokedex.id}.png`} alt='' />
            </figure>
            <div className='stats'>
              <h3>Stats</h3>
              <ul>
                <li>
                  <span></span>
                  <p></p>
                </li>
                {pokedex.stats.map((item, index) => (
                  <li key={index}>
                    <span
                      style={{ height: (200 * item.base_stat) / 100 }}
                    ></span>
                    <p> {item.stat.name} </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='pokedex-right'>
            <div className='info'>
              <h3>Info</h3>
              <ul>
                <li>
                  <p>
                    Heigth: <span>{pokedex.height} </span>
                  </p>
                </li>
                <li>
                  <p>
                    Weight: <span>{pokedex.weight}</span>
                  </p>
                </li>
                <li>
                  <p>Ability:</p>
                  <ul>
                    {pokedex.abilities.map((item, index) => (
                      <li key={index}>
                        <p> {item.ability.name} </p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className='type'>
              <h3>Type</h3>
              <ul>
                {pokedex.types.map((itemType) => (
                  <li key={itemType.type.url} className={itemType.type.name}>
                    <p> {itemType.type.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
