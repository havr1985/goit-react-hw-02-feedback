

export const Statistics = ({ state, total, positivePercentage}) => {
    return (
        <div>
            <p>Good: {state.good}</p>
            <p>Neutral: {state.neutral}</p>
            <p>Bad: {state.bad}</p>
            <p>Total: {total}</p>
            <p>positivePercentage: {positivePercentage}</p>
        </div>
    )
}