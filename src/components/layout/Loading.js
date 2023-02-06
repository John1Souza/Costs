import loading from '../../img/Loading_01.svg'

import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  )
}
