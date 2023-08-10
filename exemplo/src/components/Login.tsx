import {useState} from 'react'

export default function Login(){
    //vamos criar duas variáveis de estado para username e password
    //setUsername é uma função que altera o valor do username
    //useState é um hook do reactJS,cria e inicia a variavel de estado
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='items-center flex flex-col justify-center'>
            <div className='p-8 rounded-lg bg-slate-500 w-96 flex flex-col'>
                <h1 className='font-bold mb-10'> Login </h1>
                <form>
                    <div className='flex flex-col'>
                        <label className='block mb-2 font-semibold' htmlFor='username'> Username </label>
                        <input className='w-full border rounded-lg' type='text' id='username' name='username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='block mb-2 font-semibold' htmlFor='password'> Password </label>
                        <input className='w-full border rounded-lg' type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </form>
            </div>
        </div>

    )
}