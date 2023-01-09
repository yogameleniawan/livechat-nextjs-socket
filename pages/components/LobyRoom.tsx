const LobyRoom = ({username, setUsername, setChosenUsername}) => {
    return (
        <div className="flex items-center p-4 mx-auto min-h-screen justify-center">
            <main className="gap-4 flex flex-col items-center justify-center w-full h-full">
                  <h3 className="font-bold text-black dark:text-white text-xl">
                    What is your name?
                  </h3>
                  <input
                    type="text"
                    placeholder="Identity..."
                    value={username}
                    className="p-3 rounded-md outline-none text-black dark:text-white"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      setChosenUsername(username);
                    }}
                    className="bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-slate-100 rounded-md px-4 py-2 text-xl"
                  >
                    Go!
                  </button>
            </main>
        </div>
    )
}

export default LobyRoom;