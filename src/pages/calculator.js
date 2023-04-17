import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Calculator() {

    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [op, setOp] = useState('(operator)')

    const getValue = (event) => {
        const value = event.target.value
        console.log(value)
        setNum1(value)
    }
    const getValue2 = (event) => {
        const value2 = event.target.value
        console.log(value2)
        setNum2(value2)
    }

    const getOpValue = (event) => {
        const opValue = event.target.value
        setOp(opValue)
        console.log(opValue)
    }

    const reset = () => {
        setNum1(0)
        setNum2(0)
        setOp('(operator)')
        setResult(0)
    }

    const calculate = () => {
        if (op == '+') {
            return setResult(parseInt(num1) + parseInt(num2))
        }
        else if (op == '-') {
            return setResult(parseInt(num1) - parseInt(num2))
        }
        else if (op == '/') {
            return setResult(parseInt(num1) / parseInt(num2))
        }
        else if (op == 'x') {
            return setResult(parseInt(num1) * parseInt(num2))
        }
        else {
            return 'Invalid'
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.calculator_box}>
                <div className={styles.display}>
                    <p>{num1} {op} {num2}</p>
                    <p style={{ fontSize: '24px', marginTop: '10px' }}>{result}</p>
                </div>
                <div className={styles.buttons_container}>
                    <div className={styles.buttons_row}>
                        <button className={styles.buttons} value={7} onClick={num1 ? getValue2 : getValue}>7</button>
                        <button className={styles.buttons} value={8} onClick={num1 ? getValue2 : getValue}>8</button>
                        <button className={styles.buttons} value={9} onClick={num1 ? getValue2 : getValue}>9</button>
                        <button className={styles.buttons} value={'/'} onClick={getOpValue}>/</button>
                    </div>
                    <div className={styles.buttons_row}>
                        <button className={styles.buttons} value={4} onClick={num1 ? getValue2 : getValue}>4</button>
                        <button className={styles.buttons} value={5} onClick={num1 ? getValue2 : getValue}>5</button>
                        <button className={styles.buttons} value={6} onClick={num1 ? getValue2 : getValue}>6</button>
                        <button className={styles.buttons} value={'x'} onClick={getOpValue}>x</button>
                    </div>
                    <div className={styles.buttons_row}>
                        <button className={styles.buttons} value={1} onClick={num1 ? getValue2 : getValue}>1</button>
                        <button className={styles.buttons} value={2} onClick={num1 ? getValue2 : getValue}>2</button>
                        <button className={styles.buttons} value={3} onClick={num1 ? getValue2 : getValue}>3</button>
                        <button className={styles.buttons} value={'-'} onClick={getOpValue}>-</button>
                    </div>
                    <div className={styles.buttons_row}>
                        <button className={styles.buttons} onClick={reset}>c</button>
                        <button className={styles.buttons} value={0} onClick={getValue}>0</button>
                        <button className={styles.buttons} value={'+'} onClick={getOpValue}>+</button>
                        <button className={styles.buttons} style={{ backgroundColor: 'teal' }} onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </div >
    )
}