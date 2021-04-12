<?php
session_start();
session_destroy();
?>
<script>
    location.href = window.history.back();
</script>