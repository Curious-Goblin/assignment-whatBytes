export function UserProfile() {
    return (
        <div className="p-4 md:p-6 lg:p-8">
            <div className="rounded-lg flex gap-4 md:border-2 border-slate-300 py-2 px-2">
                <div>
                    <img
                        src="https://res.cloudinary.com/dfyusbisg/image/upload/v1713520736/20240415_170929_zlcbxp.svg"
                        className="w-10 h-10 rounded-full object-cover"
                    >
                    </img>
                </div>
                <div className="hidden  md:block pt-1 first-line:justify-center font-bold text-md md:text-lg lg:text-xl first:items-center">
                    Rahil Siddque
                </div>
            </div>
        </div>
    )
}