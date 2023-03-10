const mongoose = require('mongoose');
const Schema =mongoose.Schema;

let productSchema = new Schema({
    Name:{type:String},
    Detail:{type:String},
    picture:{type:String},
    Price:{type:Number},
    Quentity:{type:Number},
    TotalPrice :{type:Number},
    CreatedOn:{type:Date},
    CreatedBy:{type:String},
    UpdatedOn:{type:Date},
    UpdatedBy:{type:String},
},{
    Collection:'productschemas'
});
//mongodb://localhost:27017
module.exports=mongoose.model('ProductSchema',productSchema);

// let licenceHolderSchema=new Schema({
//     EmployeeName:{type:String},
//     Detail:{type:String},
//     picture:{type:String},
//     EmployeeCode:{type:Number},
//     Designation:{type:String},
//     Branch :{type:String},
//     lice_Start_Date :{type:Date},
//     lice_End_Date :{type:Date},
//     // CreatedOn:{type:Date},
//     CreatedBy:{type:String},
//     UpdatedOn:{type:Date},
//     UpdatedBy:{type:String},
// },{
//     Collection:'licenceHolder'
// });

// module.exports=mongoose.model('licenceHolderSchema',licenceHolderSchema);

// select CAST(SUM(LAT_N)as numeric(36,4)) from STATION
// group by LAT_N
// having LAT_N>38.7880 and LAT_N<137.2345

// DECLARE @table TABLE (PrimeNumber INT)

// DECLARE @final AS VARCHAR(1500)
// SET @final = ''

// DECLARE @counter INT
// SET @counter = 2

// WHILE @counter <= 1000
//   BEGIN
//       IF NOT EXISTS (SELECT primenumber
//                      FROM   @table
//                      WHERE  @counter % primenumber = 0)
//         BEGIN
//             INSERT INTO @table
//             SELECT @counter

//             SET @final = @final + Cast(@counter AS VARCHAR(20)) + '&'
//         END

//       SET @counter = @counter + 1
//   END

// SELECT Substring(@final, 0, Len(@final));



// DECLARE @var int              
// SELECT @var = 20               
// WHILE @var > 0                
// BEGIN                          
// PRINT replicate('* ', @var)   
// SET @var = @var - 1            
// END 

// SELECT X, Y FROM (
//     SELECT X, Y FROM Functions WHERE X=Y GROUP BY X, Y HAVING COUNT(*)=2
//     UNION
//     SELECT f1.X, f1.Y FROM Functions f1, Functions f2 
//     WHERE f1.X < f1.Y 
//     AND f1.X=f2.Y 
//     AND f2.X=f1.Y
//     )t
//     ORDER BY X, Y;


// select 
//   contests.contest_id, 
//   contests.hacker_id, 
//   contests.name,
//   sum(submissions_sums.sum_submissions),
//   sum(submissions_sums.sum_accepted_submissions),
//   sum(views_sums.sum_views),
//   sum(views_sums.sum_unique_views)
// from contests 
// join colleges on contests.contest_id = colleges.contest_id
// join challenges on colleges.college_id = challenges.college_id
// left join 
// (select challenge_id, sum(total_submissions) as sum_submissions,
//   sum(total_accepted_submissions) as sum_accepted_submissions
//   from submission_stats group by challenge_id) 
// as submissions_sums
// on challenges.challenge_id = submissions_sums.challenge_id
// left join
// (select 
//   challenge_id,
//   sum(total_views) as sum_views,
//   sum(total_unique_views) as sum_unique_views
//   from view_stats group by challenge_id) 
// as views_sums
// on challenges.challenge_id = views_sums.challenge_id

// -- group the information per-contest so that everything is aggregated.
// group by contests.contest_id, contests.hacker_id, contests.name

// -- HAVING works like WHERE, except over aggregations, which is what we want here.
// having (
//   sum(submissions_sums.sum_submissions) +
//   sum(submissions_sums.sum_accepted_submissions) +
//   sum(views_sums.sum_views) +
//   sum(views_sums.sum_unique_views)
// ) > 0
// order by contests.contest_id