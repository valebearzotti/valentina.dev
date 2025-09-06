export const Container = ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="min-h-dvh flex flex-col items-center justify-start p-8 gap-4">
            <div className="max-w-2xl w-full flex flex-col gap-4">{children}</div>
        </div>
    );
};