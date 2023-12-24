import './App.css'
import React, { useRef } from 'react'
import { useFetch } from './hooks/useFetch'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useHover } from './hooks/useHover'
import { useWindowScroll } from './hooks/useWindowScroll'
import { useToggle } from './hooks/useToggle'
import { useViewportSize } from './hooks/useViewportSize'

function App() {
    // const [token, { setItem, removeItem }] = useLocalStorage('token')

    // const myRef = useRef(null)
    // const { hovered } = useHover(myRef)

    // const [scroll, scrollTo] = useWindowScroll()

    // const { height, width } = useViewportSize()

    // const [value, toggle] = useToggle()
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

    // const { data, isLoading, error, refetch } = useFetch(
    //     'https://jsonplaceholder.typicode.com/posts'
    // )

    return (
        <div className="App">
            {/* <header className="App-header"> */}
            {/* <div>
                    <p>Твой токен: {token}</p>
                    <div>
                        <button onClick={() => setItem('new-token')}>
                            Задать токен
                        </button>
                        <button onClick={() => removeItem()}>
                            Удалить токен
                        </button>
                    </div>
                </div> */}
            {/* <div ref={myRef}>
                    {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
                </div> */}
            {/* <div>
                    <p>
                        Scroll position x: {scroll.x}, y: {scroll.y}
                    </p>
                    <div style={{width: '200vw'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Omnis excepturi nesciunt quas ut mollitia,
                        repudiandae molestiae facere architecto maxime quisquam,
                        at sunt consectetur sequi impedit eum harum expedita
                        eligendi rem? Velit sequi officia minus, eligendi
                        voluptas, nesciunt quam, impedit totam deserunt rem
                        deleniti exercitationem inventore corrupti. A soluta
                        officiis aperiam numquam. Soluta nostrum asperiores
                        consequatur sint, provident commodi recusandae nam quasi
                        corrupti debitis! Perspiciatis necessitatibus assumenda
                        ullam totam in voluptas vero beatae, labore itaque hic
                        incidunt sint sapiente sunt asperiores neque voluptates
                        odit alias animi modi repellendus amet architecto
                        adipisci, soluta numquam. Deleniti maiores explicabo
                        veritatis quod ducimus mollitia ex inventore,
                        necessitatibus, deserunt possimus est maxime nihil non,
                        fuga quasi laudantium. Itaque, quam odio. Perferendis
                        expedita suscipit deserunt id similique odit maiores
                        ipsam pariatur, nam obcaecati velit cum cupiditate fugit
                        magnam ipsa at esse possimus quas exercitationem optio
                        illo? Nisi atque illum ab nesciunt nulla praesentium
                        aperiam dicta error obcaecati. Itaque modi maxime
                        repellat numquam aliquid voluptatum accusamus quae nemo
                        laudantium, eligendi natus. Possimus rerum ipsa, hic
                        quasi quae similique dolorem blanditiis, fugiat tempore
                        debitis alias facere, facilis excepturi veritatis?
                        Dolorum fugiat quia maiores, qui quisquam minus, ipsum,
                        facilis expedita in vero recusandae laboriosam ab earum
                        itaque numquam harum quam ad. Iure cupiditate voluptate
                        natus. Tempora velit consequuntur voluptas, suscipit,
                        nemo modi perspiciatis molestias eum quaerat deleniti
                        nesciunt voluptate veritatis nulla magni quia similique,
                        harum id itaque magnam adipisci. Sequi quas sunt placeat
                        deleniti consequatur, ipsa expedita excepturi pariatur
                        explicabo fuga, nostrum doloribus nisi maiores tempore
                        porro. Nostrum itaque labore possimus facere autem
                        corrupti. Quis, eaque minima nihil assumenda atque
                        nostrum. Magni facere, veniam alias ipsam odio error
                        deserunt quos molestiae illum iure accusamus mollitia.
                        Recusandae adipisci esse aspernatur suscipit. Quaerat
                        unde cupiditate, excepturi reprehenderit cum ipsa nihil,
                        harum odit ad, nobis esse nemo eos amet alias. Earum
                        eveniet esse excepturi corporis. Voluptates, magnam
                        error pariatur nulla, natus unde reprehenderit nesciunt
                        atque dignissimos facilis impedit dolores praesentium
                        accusantium nostrum nihil sapiente, consequatur debitis.
                        Rerum voluptas nihil eaque, assumenda, iste sit
                        accusamus reprehenderit corporis quam mollitia illo
                        consequatur aut reiciendis minus repellendus accusantium
                        veniam neque beatae hic doloribus eveniet excepturi
                        dolor quas? Voluptates nesciunt eum accusantium
                        blanditiis amet praesentium, ratione voluptas suscipit
                        animi natus tenetur illum voluptatibus dolores doloribus
                        vero sint, sapiente eligendi quisquam deleniti
                        quibusdam. Praesentium officiis reiciendis hic facere
                        fugit ad eligendi, incidunt impedit dolorum mollitia,
                        sunt, dignissimos quas dolores voluptatem? Doloremque,
                        quasi! Exercitationem provident quibusdam ratione
                        placeat maxime repudiandae tempore doloribus veniam
                        minus eligendi obcaecati voluptatibus saepe libero rem
                        quas, a incidunt adipisci quam commodi facere
                        repellendus nulla ipsa error? Officiis, eveniet amet?
                        Ducimus quos magni illo odio, unde fugiat dolorum
                        possimus dolores ipsa in natus molestiae amet
                        reprehenderit error voluptatibus eum, eaque quia maiores
                        dolore? Accusantium reprehenderit eius ut corrupti
                        porro, quam inventore omnis doloribus quod, provident
                        sed eligendi nam rem animi. Ducimus earum quisquam, aut
                        provident quidem nobis commodi autem corporis
                        perferendis consequuntur hic odit odio impedit nesciunt?
                        Minima iure ab cumque tempora facilis consequuntur
                        recusandae enim excepturi nisi optio amet, delectus
                        omnis numquam assumenda? Unde?
                    </div>
                    <button onClick={() => scrollTo({ y: 0 })}>
                        Scroll to top
                    </button>
                </div> */}
            {/* <div>
                    Width: {width}px, height: {height}px
                </div> */}
            {/* <p>{String(value)}</p> */}
            <button
                style={{ marginTop: '40px', width: '60px', cursor: 'pointer' }}
                onClick={() => toggle('blue')}
            >
                {String(value)}
            </button>
            {/* </header> */}
            {/* <div>
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
                data.map((item) => <div key={item.id}>{item.title}</div>)} */}
        </div>
    )
}

export default App
