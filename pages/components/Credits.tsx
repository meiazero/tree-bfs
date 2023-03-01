import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({style: 'normal', weight: "400", subsets: ['latin']})

export default function Credits() {
    return (
        <div className={ubuntu.className}>
            <p className="credits">Feito com <span className="hearth">❤</span> por <a href="http://github.com/meiazero/tree-bfs" target="_blank" rel="noopener noreferrer">meiazero</a></p>
        </div>
    )
}
