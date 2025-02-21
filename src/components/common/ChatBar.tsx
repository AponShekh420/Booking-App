import { ChatBarIcon, ChatBarLogoIcon } from './Icons';

const ChatBar = () => {
  return (
    <div className="fixed right-0 z-50 top-1/2 -translate-y-1/2 bg-custom-red text-white flex flex-col lg:gap-y-[0.4rem] gap-y-[0.2rem] md:gap-y-[0.3rem] items-center md:p-2 p-[6px] py-2 rounded-l-md lg:rounded-l-lg">
      <ChatBarLogoIcon className='lg:w-5 w-3 h-auto md:w-4'/>
      <ChatBarIcon className='lg:w-5 w-3 h-auto md:w-4'/>
    </div>
  );
}

export default ChatBar;