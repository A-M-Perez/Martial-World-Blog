import '../../styles/pages//Home.css';
import PageTransitionAnimation from '../layout/PageTransitionAnimation';

const Home = () => {
    return (
        <PageTransitionAnimation>
            <main>
                <h1>WELCOME! <span>Here you will find...</span></h1>
                <h2>Blog:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde aut similique, ab sed ducimus natus ex praesentium iure obcaecati numquam ipsam nulla tempore eveniet assumenda nihil quo fuga quae.
                    Quidem consequuntur cum veniam quaerat, eaque ipsa hic ipsum voluptatum ipsam officiis nobis ab accusamus tempore excepturi eos nam, dicta at perferendis amet maxime aliquam aliquid ullam. Explicabo, labore aspernatur.</p>
                <h2>Schools:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde aut similique, ab sed ducimus natus ex praesentium iure obcaecati numquam ipsam nulla tempore eveniet assumenda nihil quo fuga quae.
                    Quidem consequuntur cum veniam quaerat, eaque ipsa hic ipsum voluptatum ipsam officiis nobis ab accusamus tempore excepturi eos nam, dicta at perferendis amet maxime aliquam aliquid ullam. Explicabo, labore aspernatur.</p>
                <ul>
                    <li>Listed content 1</li>
                    <li>Listed content 2</li>
                    <li>Listed content 3</li>
                </ul>
            </main>
        </PageTransitionAnimation>
    );
}

export default Home;