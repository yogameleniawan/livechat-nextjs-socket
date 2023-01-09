import Image from "next/image";

const Participants = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between text-black my-2 cursor-pointer hover:bg-gray-100 p-2 hover:rounded-lg">
            <div className="photo px-1 py-2 relative mr-2">
                <Image className="rounded-full w-10 max-w-fit sm:max-w-dekstop md:w-14 lg:w-14 xl:w-14" src="https://picsum.photos/300/300" alt="Image Photo" width="300" height="300" />
                <div className="offline-indicator"></div>
                <div className="mobile-incoming-message">99</div>
            </div>
            <div className="hidden sm:flex sm:flex-row justify-between w-full border-b-2 border-grey-100 overflow-hidden">
                <div className="profile-section flex flex-col text-left overflow-hidden whitespace-nowrap text-ellipsis">
                    <span className="font-bold overflow-hidden whitespace-nowrap text-ellipsis">Namaa</span>
                    <span className="max-w-lg overflow-hidden whitespace-nowrap text-ellipsis">Pesan Pasd asdas dasd asd asd asd esan Pesan Pesan Pesan Pesan Pesan PesanPesan Pesan Pesan Pesan Pesan Pesan Pesan</span>
                </div>
                <div className="date-chat flex flex-col text-center">
                    <span>10.00</span>
                    <div className="incoming-message">99</div>
                </div>
            </div>
        </div>
    )
};

export default Participants;