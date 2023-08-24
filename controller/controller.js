import leadTbl from '../model/lead_tbl.js';

export const getAnalytics = async (req, res) => {
  try {
    const tableData = await leadTbl.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            week: { $week: '$createdAt' },
          },
          New: { $sum: { $cond: [{ $eq: ['$lead_status', 0] }, 1, 0] } },
          'Requirement Collection': { $sum: { $cond: [{ $eq: ['$lead_status', 1] }, 1, 0] } },
          Proposal: { $sum: { $cond: [{ $eq: ['$lead_status', 2] }, 1, 0] } },
          Demo: { $sum: { $cond: [{ $eq: ['$lead_status', 3] }, 1, 0] } },
          Client: { $sum: { $cond: [{ $eq: ['$lead_status', 4] }, 1, 0] } },
          Invoiced: { $sum: { $cond: [{ $eq: ['$lead_status', 5] }, 1, 0] } },
          Rejected: { $sum: { $cond: [{ $eq: ['$lead_status', 6] }, 1, 0] } },
          Cancelled: { $sum: { $cond: [{ $eq: ['$lead_status', 7] }, 1, 0] } },
        },
      },
      {
        $project: {
          _id: 0,
          year: '$_id.year',
          week: { $concat: ['Week ', { $toString: '$_id.week' }] },
          New: 1,
          'Requirement Collection': 1,
          Proposal: 1,
          Demo: 1,
          Client: 1,
          Invoiced: 1,
          Rejected: 1,
          Cancelled: 1,
        },
      },
      {
        $sort: { year: 1, week: 1 },
      },
    ]);

    let total = 0;
    let totalClient = 0;

    tableData.forEach((item) => {
      totalClient += item.New;
      total +=
        item.New +
        item['Requirement Collection'] +
        item.Proposal +
        item.Demo +
        item.Client +
        item.Invoiced +
        item.Rejected +
        item.Cancelled;
    });
    const response = {
      total,
      total_client: totalClient,
      ratio: totalClient / total,
      data: tableData,
    };

    res.status(200).send(response);
  } catch (error) {
    console.error('Error while Getting data:', error);
  }
};
