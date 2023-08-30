SELECT id, title, content, creatTime, author FROM blog.blog_list;
-- 插数据
INSERT INTO blog_list values(2, '标题2','内容2',1693247022335, 'ls');
-- 模糊查询博客列表
SELECT * from blog_list WHERE title LIKE '%标题%' AND author like '%z%';
-- 根据 ID 查博客详情
SELECT * FROM blog_list WHERE id = 1;
-- 新增 博客 
INSERT INTO blog_list (title, content, creatTime, author) values('标题3','内容3',1693247022335, 'ww');
-- 修改 博客
UPDATE blog_list SET title = '标题111' WHERE id = 1;
-- 删除 博客
DELETE  FROM blog_list WHERE id = 2;

SELECT * from blog_list;