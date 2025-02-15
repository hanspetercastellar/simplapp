import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from 'react-data-table-component';
import movies from '../../Vars/Movies';

const columns = [
	{
		name: 'Title',
		selector: 'title',
		sortable: true,
	},
	{
		name: 'Directior',
		selector: 'director',
		sortable: true,
	},
	{
		name: 'Runtime (m)',
		selector: 'runtime',
		sortable: true,
		right: true,
	},
];

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
	<div className='custom-control custom-checkbox'>
		<input
			type='checkbox'
			className='custom-control-input'
			ref={ref}
			{...rest}
		/>
		<label className='custom-control-label' onClick={onClick} />
	</div>
));

const Table = ({ data, column, title }) => {
	return (
		<div className='App'>
			<div className='card'>
				<DataTable
					columns={columns}
					data={movies}
					defaultSortField='title'
					pagination
					actions={<button>Nuevo</button>}
					selectableRows
					selectableRowSelected={row => {}}
					selectableRowsComponent={BootyCheckbox}
				/>
			</div>
		</div>
	);
};

export default Table;
