import './Library.css';

// Here we need to set the navigation.

function Library() {
    return (
        <section>
            <input type="text"></input>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Editora</th>
                        <th>Data publicação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Texto</td>
                        <td>Texto</td>
                        <td>Texto</td>
                        <td>Número</td>
                    </tr>
                    <tr>
                        <td>Texto</td>
                        <td>Texto</td>
                        <td>Texto</td>
                        <td>Número</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Library;
