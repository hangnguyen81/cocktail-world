import {useGlobalContext} from '../cocktailContext';

function About(){
    const {closeSubmenu} = useGlobalContext();
    return (
        <section className='section' onMouseOver={closeSubmenu}>
            <div>
                <h2 className='section-title'>About us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ex ultrices, auctor massa ac, sagittis libero. Proin sem risus, venenatis consectetur lacus aliquet, sollicitudin viverra ante. 
                    Nulla facilisi. Nulla facilisi. Proin quis odio ligula. Suspendisse potenti. Morbi iaculis ut velit in pellentesque. 
                    Maecenas pretium lacus non dictum elementum. Duis convallis sagittis convallis. Mauris porta justo non justo consectetur, id auctor urna blandit.
                </p>
                <p>Nunc fermentum turpis suscipit maximus dapibus. Nulla nec enim sed massa rhoncus blandit. 
                    Nulla sit amet massa ut lectus ornare bibendum. Phasellus posuere pretium aliquam. 
                    Suspendisse vel tellus nec enim mattis commodo. Proin ut enim est. Nam tincidunt 
                    lacinia sodales. Donec tincidunt nibh vel pellentesque tincidunt. Maecenas imperdiet 
                    ante posuere quam pretium, et gravida lacus imperdiet. Phasellus sem libero, rutrum vel 
                    venenatis at, dictum nec mi. Praesent nulla erat, scelerisque at nisi nec, suscipit 
                    elementum ipsum. Curabitur volutpat consequat malesuada. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Praesent interdum enim nisl. Curabitur mattis magna at 
                    porttitor ornare.</p>
            </div>
            <div>
                <h2 className='section-title'>Our mission</h2>
                <p>Aliquam semper in justo id dapibus. Ut dictum purus pretium urna aliquam, 
                    ac vehicula libero dictum. In gravida enim in bibendum tempus. 
                    Donec dignissim lectus est, non consectetur diam ultrices non. 
                    Aliquam consectetur odio et nulla finibus, vel vehicula diam tempus. 
                    Mauris lobortis egestas sodales. Pellentesque eu leo eu orci viverra gravida non 
                    sagittis lacus. Quisque molestie dui et magna faucibus maximus. 
                    Vestibulum dui sem, egestas ut lectus vitae, elementum mollis est.
                    Quisque venenatis malesuada augue id rutrum. Suspendisse convallis 
                    feugiat ligula, sed malesuada turpis laoreet vel. Pellentesque in vestibulum ex.</p>
            </div>
        </section>
    )
}

export default About;
