import './App.css'
import React from 'react'
import { useFetch } from './useFetch'

function App() {
    const { data, isLoading, error, refetch } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    )

        console.log('###: isLoading', isLoading);
        console.log('###: error', error);
        console.log('###: data', data);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <button
                            onClick={() =>
                                refetch({
                                    params: {
                                        _limit: 3,
                                    },
                                })
                            }
                        >
                            Перезапросить
                        </button>
                    </div>
                    {isLoading && 'Загрузка...'}
                    {error && 'Произошла ошибка'}
                    {data &&
                        !isLoading &&
                        data.map((item) => (
                            <div key={item.id}>{item.title}</div>
                        ))}
                </div>
            </header>
        </div>
    )
}

export default App
