import './Aside.css';

function Aside() {
    return (
        <aside>
            <section>
                <img src="/FullLogo.png" alt="Logo" />
            </section>
            <section>
                <button>Botão 1</button>
                <button>Botão 2</button>
                <button>Botão 3</button>
            </section>
            <section>
                <div>
                    <div>
                        <img src="/DefaultUserIcon.jpg" alt="Profile Icon" />
                    </div>
                    <div>
                        <p>Username</p>
                        <button>{'>'}</button>
                    </div>
                </div>
            </section>
        </aside>
    );
}

export default Aside;
