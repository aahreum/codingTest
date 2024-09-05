const solution = (id_list, report, k) => {
    const reportCount = Object.fromEntries(id_list.map(id => [id, 0]));
    const mail = Object.fromEntries(id_list.map(id => [id, 0]));
    const reports = {};

    id_list.forEach((user) => {
        reports[user] = new Set();
    });

    report.forEach(rep => {
        const [reporter, reported] = rep.split(' ');
        if (!reports[reporter].has(reported)) {
            reports[reporter].add(reported);
            reportCount[reported] += 1;
        }
    });

    id_list.forEach(user => {
        if (reportCount[user] >= k) {
            for (const reporter of Object.keys(reports)) {
                if (reports[reporter].has(user)) {
                    mail[reporter] += 1;
                }
            }
        }
    });

    return Object.values(mail);
}
