import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login(){
    //vamos criar duas variáveis de estado para username e password
    //setUsername é uma função que altera o valor do username
    //useState é um hook do reactJS,cria e inicia a variavel de estado
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //navegar para o componente Produto
    //hook do react-router-dom que permite navegar entre páginas
    const navigate = useNavigate()

    //função que será executada quando o formulário for submetido
    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        //previne o comportamento padrão do formulário
        e.preventDefault()
        //navegar para o componente Produto
        navigate('/produto', {state: {username: username}})
    }

    return (
        <div className='items-center flex flex-col justify-center'>
            <div className='p-8 rounded-lg bg-slate-700 w-96 flex flex-col'>
                <h1 className='font-bold mb-10'> Login </h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col'>
                        <label className='block mb-2 font-semibold' htmlFor='username'> Username </label>
                        <input className='w-full border rounded-lg h-10' type='text' id='username' name='username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='block mb-2 font-semibold' htmlFor='password'> Password </label>
                        <input className='w-full border rounded-lg h-10' type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='w-full font-semibold p-2 mt-8 rounded bg-orange-600 text-white'>Login</button>
                </form>
            </div>
        </div>
    )
}