import Image from 'next/image';

export const Loading = () => {
  return (
    <div className="w-[100svw] h-[70svh] flex-center">
      <Image src="/assets/icons/loader.svg" width={60} height={60} alt="loading..." />
    </div>
  );
};
