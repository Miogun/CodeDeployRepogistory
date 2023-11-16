// import datetime, json
// import pymysql.cursors
// import os
  
// def json_default(value):
//   if isinstance(value, datetime.date):
//     return value.strftime('%Y-%m-%d')
//   raise TypeError('not JSON serializable')  

// def lambda_handler(event, context):
    
//     connection = pymysql.connect(host=os.environ['RDS_HOST'],
//                              user=os.environ['RDS_USER'],
//                              password=os.environ['RDS_PASSWORD'],
//                              database=os.environ['RDS_DATABASE'], 
//                              charset='utf8',
//                              cursorclass=pymysql.cursors.DictCursor)

//     try:
//         with connection:
//             with connection.cursor() as cursor:
//                 sql = "UPDATE t_board set title = %s, contents = %s, updated_dt = now(), updated_id = %s where board_idx = %s"
//                 count = cursor.execute(sql, (event['title'], event['contents'], event['updatedId'], event['boardIdx'], ))
//             connection.commit()

//     except Exception as e:
//         return {
//             'statusCode': 500,
//             'body': e
//         }

//     if count > 0:
//         return {
//            'statusCode': 200,
//            'body': 'update success'
//         }
//     else:
//         return {
//            'statusCode': 404,
//            'body': 'update failure'
//         }
