'use client';

import { PromptCard } from './PromptCard';

export const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  data = data.reverse();
  
  return (
    <section className="w-full feed">
      <h1 className="head_text text-left text-9xl">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-5 md:mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};
