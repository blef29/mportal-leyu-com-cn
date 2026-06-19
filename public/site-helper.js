(function() {
    'use strict';

    // 配置数据
    var config = {
        siteUrl: 'https://mportal-leyu.com.cn',
        keyword: '乐鱼体育',
        seed: 21615749
    };

    // 页面元素工具
    var helper = {
        // 创建样式
        injectStyles: function() {
            var style = document.createElement('style');
            style.textContent =
                '.helper-card { background: #f0f8ff; border: 1px solid #b0d4f1; border-radius: 12px; padding: 20px; margin: 20px auto; max-width: 600px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-family: system-ui, sans-serif; }' +
                '.helper-card h3 { margin: 0 0 10px; color: #1a3a5c; font-size: 1.3rem; }' +
                '.helper-card p { margin: 8px 0; color: #2c3e50; line-height: 1.5; }' +
                '.helper-badge { display: inline-block; background: #e3f2fd; color: #1565c0; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; margin: 4px 6px 4px 0; border: 1px solid #90caf9; }' +
                '.helper-access { margin-top: 16px; padding: 12px; background: #e8f5e9; border-left: 4px solid #66bb6a; border-radius: 4px; color: #1b5e20; }' +
                '.helper-access a { color: #1565c0; text-decoration: none; font-weight: 600; }' +
                '.helper-access a:hover { text-decoration: underline; }';
            document.head.appendChild(style);
        },

        // 生成提示卡片
        createCard: function() {
            var card = document.createElement('div');
            card.className = 'helper-card';
            card.innerHTML = '<h3>🔔 页面提示</h3><p>欢迎来到 <strong>' + config.siteUrl + '</strong>，本页面向您展示关键词徽章与访问说明。</p>';
            return card;
        },

        // 生成关键词徽章
        createBadges: function() {
            var badgeContainer = document.createElement('div');
            badgeContainer.style.margin = '16px 0';

            var keywords = [config.keyword, '体育资讯', '赛事动态', '乐鱼平台', '运动生活'];
            keywords.forEach(function(kw) {
                var badge = document.createElement('span');
                badge.className = 'helper-badge';
                badge.textContent = '🏷️ ' + kw;
                badgeContainer.appendChild(badge);
            });
            return badgeContainer;
        },

        // 生成访问说明
        createAccessInfo: function() {
            var info = document.createElement('div');
            info.className = 'helper-access';
            info.innerHTML = '<strong>📌 访问说明：</strong> 您正在浏览的内容来自 <a href="' + config.siteUrl + '" target="_blank" rel="noopener noreferrer">' + config.siteUrl + '</a>。如需更多信息，请访问官网。';
            return info;
        },

        // 初始化
        init: function() {
            this.injectStyles();

            var container = document.createElement('div');
            container.id = 'helper-root';
            container.appendChild(this.createCard());
            container.appendChild(this.createBadges());
            container.appendChild(this.createAccessInfo());

            var ref = document.body.firstChild;
            if (ref) {
                document.body.insertBefore(container, ref);
            } else {
                document.body.appendChild(container);
            }
        }
    };

    // 当 DOM 就绪时初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            helper.init();
        });
    } else {
        helper.init();
    }
})();