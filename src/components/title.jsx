import "../styles/components/title.css";

export default function Title({ value }) {
    return (
        <>
            <div className="titleWrapper">
                <h1 className="title">{value}</h1>
                {value === "Todo List" ? <p>🦦</p> : <p>✏️</p>}
            </div>
        </>
    );
}
