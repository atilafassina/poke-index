import styles from '@styles/card-profile.module.css'

type CardProfileProps = {
  image: string
  height: number
  weight: number
  species: {
    name: string
    url: string
  }
}

export const CardProfile = ({
  image,
  height,
  weight,
  species,
}: CardProfileProps) => (
  <>
    <img className={styles.image} src={image} />
    <table className={styles.table}>
      <thead>
        <tr>
          <th>height</th>
          <th>weight</th>
          <th>species</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{height * 10}cm</td>
          <td>{weight / 10}Kg</td>
          <td>
            <a rel="noreferrer" href={species.url} target="_blank">
              {species.name}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </>
)
