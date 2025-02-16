import React from 'react'
import Heading from './Heading'
import TestimonialCard from './TestimonialCard'

function Testimonial() {
    return (
        <>
            <section className="testimonial">
                <div className="container">
                    <Heading subTitle="What Our Users & members Say" title="Our Testimonials" para="Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas." />
                    <div className="testimonial-item">
                        <TestimonialCard image="images/testimonial-img1.png" alt="Testimonial Image" content="Alex, United States" para="I was able to find my dream job through Borderless Chain's matchmaking service. It was amazing to connect with professionals from all over the world and discover new opportunities."/>
                        <TestimonialCard image="images/testimonial-img2.png" alt="Testimonial Image" content="Maria, Brazil" para="I met my soulmate on Borderless Chain. It's the best platform for connecting with people who share your values and interests."/>
                        <TestimonialCard image="images/testimonial-img3.png" alt="Testimonial Image" content="Chen, China" para="I've been using Borderless Chain to share my art with the world. It's been a great way to connect with other artists and build a community."/>
                        <TestimonialCard image="images/testimonial-img4.png" alt="Testimonial Image" content="David, Australia" para="Borderless Chain has helped me expand my business network and find new clients. It's a valuable tool for anyone looking to grow their career or business."/>
                        <TestimonialCard image="images/testimonial-img5.png" alt="Testimonial Image" content="Sarah, United Kingdom" para="The Affluent Members Club has been a game-changer for my business. I've made valuable connections and learned a lot from other successful entrepreneurs."/>
                        <TestimonialCard image="images/testimonial-img6.png" alt="Testimonial Image" content="Ahmed, Egypt" para="I've been able to support several charitable causes through the Affluent Members Club. It's a great way to give back and make a difference."/>
                        <TestimonialCard image="images/testimonial-img7.png" alt="Testimonial Image" content="Yasmin, India" para="I've attended some amazing events through the club, including a private dinner with a world-renowned philanthropist. It's been an incredible experience."/>
                        <TestimonialCard image="images/testimonial-img1.png" alt="Testimonial Image" content="Kenji, Japan" para="The Affluent Members Club has provided me with valuable investment opportunities and financial advice. It's a great resource for anyone looking to grow their wealth."/>
                        <TestimonialCard image="images/testimonial-img5.png" alt="Testimonial Image" content="David, Australia" para="Borderless Chain has significantly expanded my business network. It's been invaluable for finding new clients and growing my business."/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial