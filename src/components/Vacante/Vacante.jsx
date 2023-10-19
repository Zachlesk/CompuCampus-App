import ejemplo from '../../Assets/img/logo.jpg'
import './Vacante.css';




export const Vacante = () => {
    return (
        <div className='bodyVacants'>


            <div className='rigth'>

                <div className='sec1'>
                    <h1>React Frontend Developer</h1>
                    <h3>Sep 29, 2023</h3>
                </div>

                <div className='sec2'>
                    <p>
                        Job Overview
                        The Inside Sales team is the first point of human contact for prospective customers learning how Mailchimp adds value to their business. The team works with businesses ranging from completely new to digital marketing to those switching from other providers and looking to optimize. The Inside .

                        Responsibilities
                        Monitor inbound and/or outbound channels (phone, email, & chat) and proactively respond to leads
                        Own discovery conversations with prospective customers
                        Dissect and qualify prospects’ business goals to determine if Mailchimp can be a strategic investment for their business’ growth

                        Experience
                        3 months with prior relevant experience (preferred)
                        Strong written and interpersonal communication skills, including the ability to explain concepts to an international audience

                        Perks (Benefices)
                        Culture and values
                        Intuit’s company culture is rooted in our core values, which promote an innovative and inclusive environment where diverse perspectives and new ideas are celebrated.
                        Benefits we offer
                        People who give their best deserve the best in return. We offer rewards that include everything you’d expect, and even more that you wouldn’t. Enjoy the best in class perks and benefits at Intuit.

                    </p>
                </div>



            </div>



            <div className='left'>

                <div className='img'>

                    <img src={ejemplo}/>

                </div>

                <div className='middle'>

                     <h1>
                            Microsoft
                     </h1>

                </div>


                <div className='square'>

                        <div className='category'>

                            <div className='box'>
                                <p>Category</p>
                            </div>
                            
                        </div>

                        <div className='traits'>

                        <div className='boxy'>
                            <label>Salary</label>
                            <p>$110-190 / Hour</p>
                        </div>
 
                        <div className='boxy'>
                            <label>Location</label>
                            <p>Colombia</p>
                        </div>

                        <div className='boxy'>
                            <label>Job Type</label>
                            <p>Full-Time</p>
                        </div>

                        <div className='boxy'>
                            <label>Daytime</label>
                            <p>8AM-4PM</p>
                        </div>


                        </div>

                </div>

            </div>

        </div>

    )
}