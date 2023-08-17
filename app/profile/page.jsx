'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Profile } from '@components/Profile';
import { Loading } from '@components/Loading';

const MyProfile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;

    const fetchPosts = async () => {
      const response = await fetch(`api/users/id/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
      setIsLoading(false);
    };

    if (session?.user.id && status === 'authenticated') fetchPosts();
  }, [status]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id.toString()}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?');

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  if (status === 'loading' || isLoading) return <Loading />;
  if (status === 'unauthenticated') return <p className="text-xl text-orange-700">You are not logged in :/</p>;

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
