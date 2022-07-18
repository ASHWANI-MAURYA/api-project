import axios from 'axios';
export function store(expenseData) {
    axios.post('localhost:3000/',
        expenseData
        
    );
    
}