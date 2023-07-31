import {useState} from 'react';

type TextFieldProps = {
	handleClickAdd: (name: string, number: string) => void;
};

export default function TextField({handleClickAdd}: TextFieldProps) {
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	return (
		<div>
			<label htmlFor='name'>
                이름:
			</label>
			<input id='name' onChange={e => {
				setNewName(e.target.value);
			}} />

			<label htmlFor='phone-number'>
                전화번호:
			</label>
			<input id='phone-number' onChange={e => {
				setNewNumber(e.target.value);
			}}/>

			<button onClick={() => {
				handleClickAdd(newName, newNumber);
			}}>
                추가
			</button>
		</div>
	);
}
