export function calculateClassAverage(students, courseId) {
    let totalGrade = 0;
    let count = 0;

    students.forEach(student => {
        const courseRecord = student.courses.find(c => c.courseId === courseId);
        if (courseRecord) {
            totalGrade += courseRecord.grade;
            count++;
        }
    });

    return count === 0 ? 0 : parseFloat((totalGrade / count).toFixed(2));
}

export function findTopStudent(students) {
    if (!students || students.length === 0) return null;

    return students.reduce((top, current) => {
        return current.getAverage() > top.getAverage() ? current : top;
    });
}

export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}