export default function SkillSection(){
    return (
        <div className="flex flex-col md:flex-row">
        <div className="p-4 bg-blue-200 m-2 w-full md:w-1/2">
        <div className="flex flex-row p-4">
    <div className="flex-1 bg-red-200 p-4">
    <p>This is the first row.</p>
    </div>
    <div className="flex-1 bg-blue-200 p-4">
    <p>This is the second row.</p>
    </div>
    <div className="flex-1 bg-green-200 p-4">
    <p>This is the third row.</p>
    </div>
    </div>
    <div className="flex flex-row p-4">
    <div className="flex-1 bg-red-200 p-4">
    <p>This is the first row.</p>
    </div>
    <div className="flex-1 bg-blue-200 p-4">
    <p>This is the second row.</p>
    </div>
    <div className="flex-1 bg-green-200 p-4">
    <p>This is the third row.</p>
    </div>
    </div>
        </div>
        <div className="p-4 bg-green-200 m-2 w-full md:w-1/2">
        </div>
        </div>
    )
}