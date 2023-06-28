import pymysql
    
class Sample:
    def __init__(self):
        self.host = "localhost"  
        self.user = "root"       
        self.password = "0000"           
        self.database = ""
  
        self.conn = pymysql.connect(host=self.host, user=self.user, password=self.password, database=self.database)
        self.cur  = self.conn.cursor()
    
    def __del__(self):
        self.conn.close()
        
    def insert(self, subject, url):
        query = "INSERT INTO sample (date, subject, url) VALUES (now(), '{}', '{}')".format(subject, url)        
        self.cur.execute(query)
        self.conn.commit()
        
    def get_data(self, limit = 3):
        query = "SELECT * FROM sample WHERE upload = 0 limit {}".format(limit)
        self.cur.execute(query)
        results = self.cur.fetchall()
        return results