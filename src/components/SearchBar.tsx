import {useRef} from 'react';

type SearchBarProps = {
	filterText: string;
	setFilterText: (value: string) => void;
};

export default function SearchBar({filterText, setFilterText}: SearchBarProps) {
	const id = useRef(`input-${Math.random()}`);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setFilterText(value);
	};

	return (
		<div>
			<label
				htmlFor={id.current}
			>
				검색:
			</label>
			<input
				type='text'
				id={id.current}
				value={filterText}
				onChange={handleChange}
			/>
		</div>

	);
}
