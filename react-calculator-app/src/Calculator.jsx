import { useState } from 'react';

export function Calculator(){

    const [display, setDisplay] = useState('')
// ボタンの配置を表す配列（記述順に表示）
    const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
];
    const handleClick = (btn) => {
        if (btn === 'C'){
            setDisplay('');
        }
        else if(btn === '='){
            try { 
                const result = calculate(display);
                setDisplay(String(result));
            }
            catch (error) { 
                setDisplay('エラー');
            }
        }
        else {
            setDisplay((prev) => prev + btn);
            }

    };
    // 有効な式であるかチェック
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const calculate = (expression) => { 
        const match = expression.match(validExpression);
        if (!match) {
        throw new Error('無効な式です。');
        };
        const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    if (operator === '+')
        return(num1 + num2);

    else if(operator === '-')
        return (num1 - num2);

    else if(operator === '*')
        return(num1 * num2);

    else if(operator === '/')
        return(num1 / num2);
    else{
        throw new Error('無効な演算子です。');
    };
    };
    
    

    return(
        <div className='calculator-container'>
        <h2 className='title'>電卓アプリ</h2>
        <div className='display'>
        {display || '0'}
        </div>
        <div className='buttons-grid'>{buttons.map((btn) => <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>)}</div>
        </div>

    );
};