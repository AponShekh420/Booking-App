import { ChatBarIcon, ChatBarLogoIcon } from './Icons';

const ChatBar = () => {
  return (
    <div className="fixed right-0 z-50 top-1/2 -translate-y-1/2 bg-custom-red text-white flex flex-col gap-y-[0.4rem] items-center p-3 rounded-l-lg">
      <ChatBarLogoIcon className='w-5 h-auto'/>
      <ChatBarIcon className='w-5 h-auto'/>
    </div>
  );
}

export default ChatBar;