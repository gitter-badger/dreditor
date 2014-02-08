    var $context = $(context);
    if (!$context.find('#project-issue-ajax-form').length) {
    $context.find('.file > a').once('dreditor-patchreview', function () {
      if (this.href.match(/\.(patch|diff|txt)$/)) {
        // Generate review link.
        var $file = $(this).closest('tr').find('.file');
        var $link = $('<a class="dreditor-button dreditor-patchreview" href="' + this.href + '">Review</a>').click(function (e) {
          if (Drupal.dreditor.link !== this && Drupal.dreditor.$wrapper) {
            Drupal.dreditor.tearDown(false);
          }
          if (Drupal.dreditor.link === this && Drupal.dreditor.$wrapper) {
            Drupal.dreditor.show();
          }
          else {
            Drupal.dreditor.link = this;
          }
          e.preventDefault();
        });
        // Append review link to parent table cell.
        $link.prependTo($file);

        // Generate simplytest.me links only for patches and diffs.
        if (this.href.substr(-6) === '.patch' || this.href.substr(-5) === '.diff') {
          // Retrieve project shortname.
          var project = Drupal.dreditor.issue.getProjectShortName();
          if (project) {
            var version = Drupal.dreditor.issue.getSelectedVersion().replace('-dev', '');
            if (version) {
              $('<a/>').text('simplytest.me').attr({
                class: 'dreditor-button dreditor-patchtest',
                href: 'http://simplytest.me/project/' + project + '/' + version + '?patch[]=' + this.href,
                target: '_blank'
              }).prependTo($file);
      }
    // Re-order elements by their actual DOM position.
    self.data.elements.sort(sortOrder);
  /**
   * Wrapper around jQuery's sortOrder() to sort review comments.
   */
  sort: function (a, b) {
    if (!a || !b) {
      return 0;
    }
    return sortOrder(a.elements[0], b.elements[0]);
  },

    this.comment.comments.sort(this.sort);
    var $commentField = $('#project-issue-ajax-form :input[name*="comment_body"]');
    Drupal.dreditor.goto('#project-issue-ajax-form');
  $code.append('<thead><tr><th class="line-ruler" colspan="3"></th></tr></thead>');
  var ln1content = '';
  var ln2content = '';
  var maxGutter = 0;
  var gutter, maxln1, maxln2;
      // Expose tabs.
      line = line.replace(/(\t+)/, '<span class="error tab">$1</span>');
      // Wrap trailing white-space with a SPAN to expose them during patch
      // review. Also add a hidden end-of-line character that will only appear
      // in the pasted code.
      line = line.replace(/^(.*\S)(\s+)$/, '$1<span class="error whitespace">$2</span><span class="hidden">¶</span>');

      classes.push('new');
      diffstat.insertions++;
      syntax = true;
      if (ln2) {
        ln1o = false;
        ln2++;
    }
    // Replace line with a space (so ruler shows up).
    else if (!line.length) {
      line = '&nbsp;';
    }
    // Match git format-patch EOF lines and reset line count.
    else if (line.match(/^\-\-$/)) {
      ln1o = false;
      ln2o = false;
      ln1 = '';
      ln2 = '';
    }
    // Detect missing newline at end of file.
    else if (line.match(/.*No newline at end of file.*/i)) {
      line = '<span class="error eof">' + line + '</span>';
    }
    else {
      // @todo Also colorizing unchanged lines makes added comments almost
      // invisible. Although we could use .new.comment as CSS selector, the
      // question of a sane color scheme remains.
      // syntax = true;
      if (ln1 && ln1o) {
        ln1++;
      }
      if (ln2 && ln2o) {
        ln2++;
      }
    }
    ln1content = (ln1o ? ln1 : '');
    ln2content = (ln2o ? ln2 : '');
    line = '<tr' + classes + '><td class="ln" data-line-number="' + ln1content + '"></td><td class="ln" data-line-number="' + ln2content + '"></td><td><span class="pre">' + line + '</span></td></tr>';

    // Calculate the longest combination of line numbers in the gutter, used
    // for determining the position of the 80 character ruler.
    gutter = ("" + ln1content + ln2content);
    if (gutter.length > maxGutter) {
      maxln1 = ln1content;
      maxln2 = ln2content;
      maxGutter = gutter.length;
    }

  // The line ruler must be displayed consistently across all browsers and OS
  // that may or may not have the same fonts (kerning). Calculate the width of
  // 81 "0" characters (80 character line plus the +/- prefix from the diff)
  // by using an array (82 items joined by "0").
  //
  // We also calculate the width of the gutter (line numbers) by using the
  // largest combination of line numbers calculated above.
  var $lineRuler = $('<table id="code"><thead><tr><th class="line-ruler" colspan="3"></th></tr></thead><tbody><tr><td class="ln ln-1" data-line-number="' + maxln1 + '"></td><td class="ln ln-2" data-line-number="' + maxln2 + '"></td><td><span class="pre">' + new Array(82).join('0') + '</span></td></tr></tbody></table>')
    .appendTo('#dreditor');
  var ln1gutter = $lineRuler.find('.ln-1').outerWidth();
  var ln2gutter = $lineRuler.find('.ln-2').outerWidth();
  var lineWidth = $lineRuler.find('.pre').width();
  // Add 10px for padding (the td that contains span.pre).
  var lineRulerOffset = ln1gutter + ln2gutter + lineWidth + 10;
  var lineRulerStyle = {};
  // Check for a reasonable value for the ruler offset.
  if (lineRulerOffset > 100) {
    lineRulerStyle = {
      'visibility': 'visible',
      'left': lineRulerOffset + 'px'
    };
  }
  $lineRuler.remove();

  // Set the position of the 80-character ruler.
  $('thead .line-ruler').css(lineRulerStyle);
