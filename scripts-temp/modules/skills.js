import jQuery from 'jquery';
import * as d3 from "d3";

function SkillsSVG () {

  var skill = jQuery('.skill');

  //appending empty svg
  skill.each(function() {

    var currentSkill = jQuery(this);

    currentSkill.append('<svg class="skill__progress" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34"></svg>');
  });

  //appending outer skill circle
  var circle = d3.selectAll('svg').append('circle')
      .attr("r", "15.9155")
      .attr("cx", "16")
      .attr("cy", "16")
      .attr("class", "skill__progress-bg");

  //appending circle for progress bar itself
  var circle2 = d3.selectAll('svg').append('circle')
      .attr("r", "15.9155")
      .attr("cx", "16")
      .attr("cy", "16")
      .attr("class", "skill__progress-bar");

  //appending progress to progress bars
  skill.each(function() {

    var currentSkill = jQuery(this),
        currentSkillPercents = parseInt(currentSkill.attr('data-percentage')),
        currentSkillProgressBar = currentSkill.find('.skill__progress-bar');

        currentSkillProgressBar.css({
          'stroke-dashoffset': 100 - currentSkillPercents + 'px'
        });

  });
}

SkillsSVG();

export default SkillsSVG;