import { Logout, DeleteAccount } from "@/utils/UserUtils";

export default function Account() {
    return(
        <div className="w-full h-fit flex flex-col mt-4 space-y-10 overflow-y-scroll">
            <div className="flex flex-col space-y-3">
                <p className="font-medium text-lg border-b-[1px] border-zinc-200 pb-2">Account security</p>
                <div className="w-full grid grid-cols-2 auto-rows-auto">
                    <p className='text-sm font-medium'>Email</p>
                    <button className="w-fit rounded-md px-3 py-1 border-zinc-200 border-[1px] hover:bg-zinc-100 text-sm font-medium row-span-2 justify-self-end">
                        Change email
                    </button>
                    <p className='text-sm text-zinc-400'>test@journalytics.com</p>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <p className="font-medium text-lg border-b-[1px] border-zinc-200 pb-2" >Account actions</p>
                <div className="flex flex-row space-x-2">
                    <button 
                        className="w-fit rounded-md px-3 py-1.5 border-zinc-200 border-[1px] hover:bg-zinc-100 text-sm font-medium"
                        onClick={Logout}
                    >Log out</button>
                    <button className="w-fit rounded-md px-3 py-1.5 bg-rose-500 text-white hover:bg-rose-600 text-sm font-medium">Delete account</button>
                </div>
            </div>
        </div>
    );
}