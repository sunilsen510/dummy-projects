import React from 'react';
import { AgentCard } from '../Components/AgentCard';
import UserImage1 from '../assets/user-11.png';
import UserImage2 from '../assets/user-12.png';
import UserImage3 from '../assets/user-13.png';


const Agents = () => {
    const agents = [
      { id: 11, name: 'Sunil Sen', image: UserImage1, bio: 'Experienced agent specializing in luxury homes.'},
      { id: 12, name: 'Ravi Kumawat', image: UserImage2, bio: 'Helping first-time buyers with great deals.'},
      { id: 13, name: 'Rohit Jain', image: UserImage3, bio: 'Commercial real estate expert.'},
      { id: 14, name: 'Sunil Sen', image: UserImage1, bio: 'Experienced agent specializing in luxury homes.'},
      { id: 15, name: 'Ravi Kumawat', image: UserImage2, bio: 'Helping first-time buyers with great deals.'},
      { id: 16, name: 'Rohit Jain', image: UserImage3, bio: 'Commercial real estate expert.'},
      { id: 17, name: 'Sunil Sen', image: UserImage1, bio: 'Experienced agent specializing in luxury homes.'},
      { id: 18, name: 'Ravi Kumawat', image: UserImage2, bio: 'Helping first-time buyers with great deals.'},
      { id: 19, name: 'Rohit Jain', image: UserImage3, bio: 'Commercial real estate expert.'},
    ];
    
  return (
    <>
      <section className='py-16 px-4'>
        <h2 className='text-3xl font-bold text-blue-600 mb-8 text-center'>Meet Our Agents</h2>
        <div className='grid md:grid-cols-3 gap-8'>
        {agents.map(agent => (
          <AgentCard key={agent.id} {...agent} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Agents
