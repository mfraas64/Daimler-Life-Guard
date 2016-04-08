// Generated by CoffeeScript 1.10.0
(function() {
  var extend;

  extend = require('util')._extend;

  module.exports = {
    sensorAnalyzers: {
      pulse: function(pulse) {
        return PulseAnalyzer.analyze(pulse);
      },
      eyesOpen: function() {},
      headPose: function() {},
      muscleActivity: function() {}
    },
    symptomAnalyzers: {
      heartAttack: function() {},
      unconsciousness: function() {},
      sleeping: function() {},
      seizure: function() {}
    },
    analyze: function(latestMeasurement) {
      var analyzedSensors, analyzer, property, ref, ref1, result;
      analyzedSensors = {};
      result = {};
      ref = this.sensorAnalyzers;
      for (property in ref) {
        analyzer = ref[property];
        analyzedSensors[property] = analyzer(latestMeasurement[property]);
      }
      console.log(latestMeasurement);
      console.log(analyzedSensors);
      ref1 = this.symptomAnalyzers;
      for (property in ref1) {
        analyzer = ref1[property];
        result = extend(result, analyzer(analyzedSensors));
      }
      return result;
    }
  };

}).call(this);

//# sourceMappingURL=AnalysisService.js.map