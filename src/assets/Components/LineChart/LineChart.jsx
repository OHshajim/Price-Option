import { LineChart as LChart, Line , XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Emily', mathMarks: 82, physicsMarks: 75,   biologyMarks: 90 },
        { id: 2, name: 'Jacob', mathMarks: 75, physicsMarks: 70, biologyMarks: 85 },
        { id: 3, name: 'Sophia', mathMarks: 78, physicsMarks: 85,   biologyMarks: 88 },
        { id: 4, name: 'Daniel', mathMarks: 88, physicsMarks: 90,biologyMarks: 92 },
        { id: 5, name: 'Mia', mathMarks: 70, physicsMarks: 65,   biologyMarks: 68 },
        { id: 6, name: 'Ethan', mathMarks: 85, physicsMarks: 88,  biologyMarks: 86 },
        { id: 7, name: 'Isabella', mathMarks: 76, physicsMarks: 72, biologyMarks: 80 },
        { id: 8, name: 'Matthew', mathMarks: 72, physicsMarks: 68, biologyMarks: 70 },
        { id: 9, name: 'Olivia', mathMarks: 80, physicsMarks: 82,  biologyMarks: 84 },
        { id: 10, name: 'Alexander', mathMarks: 90, physicsMarks: 92, biologyMarks: 94 }
    ];

    // You can now use this data to draw a line chart using any charting library like Chart.js, Plotly, etc.


    return (
        <div>
            <LChart width={1200} height={450} data={studentData}>
                <Line dataKey="mathMarks" stroke='blue'></Line>
                <Line dataKey="physicsMarks" stroke='red'></Line>
                <Line dataKey="biologyMarks" stroke='green'></Line>
                <XAxis dataKey="name" />
                <YAxis />
            </LChart>
        </div>
    );
};

export default LineChart;