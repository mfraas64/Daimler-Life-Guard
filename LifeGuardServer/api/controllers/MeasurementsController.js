// Generated by CoffeeScript 1.10.0
(function() {
  var extend;

  extend = require('util')._extend;

  module.exports = {
    maxData: 1000,
    targetFps: 10,
    maxRecordJoinTime: 100,
    sensorData: [],
    healthCondition: {},
    post: function(req, res) {
      var data, latest, timestamp;
      data = req.body;
      timestamp = Date.now();
      if (this.sensorData.length === 0) {
        data.timestamp = timestamp;
        this.sensorData.push(data);
      } else {
        latest = this.latestData();
        if (timestamp - latest.timestamp > this.maxRecordJoinTime) {
          data.timestamp = timestamp;
          this.sensorData = [req.body].concat(this.sensorData);
          if (this.sensorData.length > this.maxData) {
            this.sensorData.pop();
          }
        } else {
          latest = extend(latest, data);
        }
      }
      this.healthCondition = AnalysisService.analyze(this.latestData());
      return res.ok();
    },
    latestData: function() {
      if (this.sensorData.length > 0) {
        return this.sensorData[0];
      } else {
        return {};
      }
    },
    latest: function(req, res) {
      var data;
      data = this.latestData();
      res.set('Access-Control-Allow-Origin', '*');
      return res.json(data);
    },
    warnings: function(req, res) {
      res.set('Access-Control-Allow-Origin', '*');
      return res.json(this.healthCondition);
    }
  };

}).call(this);

//# sourceMappingURL=MeasurementsController.js.map
