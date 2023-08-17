import React from 'react';
import Link from 'next/link';

export const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const handleTagChange = (e) => {
    let newText = e.target.value;
    if (newText.charAt(0) !== '#' && newText.length > 0) newText = '#' + newText;
    if (newText === '#' && post.tag.length > 0) newText = '';

    setPost({ ...post, tag: newText.toLowerCase().replace(' ', '') });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share incredible prompts with the World, and let your imagination run wild with AI-powered platform.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <div className="flex-between font-satoshi font-semibold text-base text-gray-700">
            <span>Your AI Prompt</span>
            <span className={`font-normal ${post.prompt.length < 500 ? 'text-gray-400' : 'text-red-500'}`}>
              {post.prompt.length} / 500
            </span>
          </div>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
            maxLength={500}
          />
        </label>

        <label>
          <div className="flex-between font-satoshi font-semibold text-base text-gray-700">
            <span>
              Tag <span className="font-normal">(#product, #webdevelopment, #idea ...)</span>
            </span>
            <span className={`font-normal ${post.tag.length < 40 ? 'text-gray-400' : 'text-red-500'}`}>
              {post.tag.length}/40
            </span>
          </div>
          <input
            value={post.tag}
            onChange={handleTagChange}
            placeholder="#tag"
            required
            className="form_input"
            maxLength={40}
          />
        </label>

        <div className="flex-between mx-3 mb-5 gap-4">
          <Link href={type === 'Edit' ? '/profile' : '/'} className="text-grey-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
