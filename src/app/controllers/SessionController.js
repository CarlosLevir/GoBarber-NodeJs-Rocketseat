const User = require('../models/User');

class SessionController {
  async create(req, res) {
    return res.render('auth/signin');
  }

  async store(req, res) {
    const { email, password } = req.body;

    const user = User.findOnde({ where: { email } });

    if (!user) return res.redirect('/');

    if (!(await user.checkPassword(password))) return res.redirect('/');

    req.session.user = user;

    return res.redirect('/app/dashboard');
  }

  destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie();
      return res.redirect('/');
    });
  }
}

module.exports = new SessionController();
