import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown    
  } = useContext(CountdownContext)
 
  // padstart serve para colocar um zero na frente, caso o número tenha menos de 2 dígitos
  // split com '' vazias serve para repartir cada caractere individualmente. Ex: '25' => '2' e '5'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton}`}
        >
          Ciclo encerrado
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountDown}
              >
                Abandonar ciclo
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountDown}
                >
                  Iniciar um ciclo
                </button>
              )}
          </>
        )}



    </div>
  );
}