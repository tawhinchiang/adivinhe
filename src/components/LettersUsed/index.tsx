
import styles from './styles.module.css';

import { Letter } from '../Letter';

// type Props ={
//     lettersUsed?: string
// }
export function LettersUsed() {

    return (
        <div className={styles.lettersUsed}>

            <h5>Letras Utilizadas</h5>
            <div >
                <Letter value = "A" size = "small" color = "correct"/>
                <Letter value = "B" size = "small" color = "wrong"/>
        
                
                </div>
            
        </div>)
}